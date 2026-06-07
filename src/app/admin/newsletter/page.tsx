'use client';

import { useState, useEffect, useCallback } from 'react';

const ADMIN_SECRET =
    typeof window !== 'undefined'
        ? localStorage.getItem('admin_secret') ?? ''
        : '';

interface Stats {
    state: {
        status: string;
        total_emails: number;
        processed_count: number;
        subscribed_count: number;
        failed_count: number;
        last_processed_at: string | null;
        updated_at: string;
    };
    total: number;
    pending: number;
    subscribed: number;
    failed: number;
}

function formatDate(iso: string | null): string {
    if (!iso) return '—';
    return new Date(iso).toLocaleString();
}

function StatusBadge({ status }: { status: string }) {
    const colors: Record<string, string> = {
        running: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        paused: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${colors[status] ?? 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30'
                }`}
        >
            <span
                className={`w-1.5 h-1.5 rounded-full ${status === 'running' ? 'bg-emerald-400 animate-pulse' : 'bg-current'
                    }`}
            />
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
    );
}

export default function NewsletterAdminPage() {
    const [secret, setSecret] = useState('');
    const [authed, setAuthed] = useState(false);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(false);
    const [actionLoading, setActionLoading] = useState(false);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [message, setMessage] = useState<{
        text: string;
        type: 'success' | 'error' | 'info';
    } | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const showMessage = (
        text: string,
        type: 'success' | 'error' | 'info' = 'info'
    ) => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 5000);
    };

    const fetchStats = useCallback(
        async (adminSecret: string) => {
            setLoading(true);
            try {
                const res = await fetch('/api/newsletter/status', {
                    headers: { 'x-admin-secret': adminSecret },
                });
                if (!res.ok) throw new Error('Failed to fetch');
                const data = (await res.json()) as Stats;
                setStats(data);
            } catch {
                showMessage('Failed to load stats', 'error');
            } finally {
                setLoading(false);
            }
        },
        []
    );

    const handleAuth = () => {
        if (!secret.trim()) return;
        localStorage.setItem('admin_secret', secret);
        setAuthed(true);
        fetchStats(secret);
    };

    // Auto-refresh every 30 seconds when running
    useEffect(() => {
        if (!authed) return;
        const savedSecret = localStorage.getItem('admin_secret') ?? secret;
        if (!savedSecret) return;

        const interval = setInterval(() => {
            if (stats?.state.status === 'running') {
                fetchStats(savedSecret);
            }
        }, 30000);

        return () => clearInterval(interval);
    }, [authed, stats?.state.status, secret, fetchStats]);

    const handleControl = async (action: 'start' | 'pause' | 'reset') => {
        const adminSecret = localStorage.getItem('admin_secret') ?? secret;
        setActionLoading(true);
        try {
            const res = await fetch('/api/newsletter/control', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-secret': adminSecret,
                },
                body: JSON.stringify({ action }),
            });
            const data = (await res.json()) as { message?: string; error?: string };
            if (!res.ok) throw new Error(data.error ?? 'Action failed');
            showMessage(data.message ?? 'Done', 'success');
            await fetchStats(adminSecret);
        } catch (err) {
            showMessage(
                err instanceof Error ? err.message : 'Action failed',
                'error'
            );
        } finally {
            setActionLoading(false);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;
        const adminSecret = localStorage.getItem('admin_secret') ?? secret;

        setUploadLoading(true);
        try {
            const formData = new FormData();
            formData.append('csv', selectedFile);

            const res = await fetch('/api/newsletter/upload', {
                method: 'POST',
                headers: { 'x-admin-secret': adminSecret },
                body: formData,
            });

            const data = (await res.json()) as {
                inserted?: number;
                duplicates?: number;
                invalid?: number;
                total?: number;
                error?: string;
            };

            if (!res.ok) throw new Error(data.error ?? 'Upload failed');

            showMessage(
                `✅ Uploaded: ${data.inserted} new, ${data.duplicates} duplicates skipped, ${data.invalid} invalid`,
                'success'
            );
            setSelectedFile(null);
            await fetchStats(adminSecret);
        } catch (err) {
            showMessage(
                err instanceof Error ? err.message : 'Upload failed',
                'error'
            );
        } finally {
            setUploadLoading(false);
        }
    };

    const progressPercent =
        stats && stats.total > 0
            ? Math.round(((stats.subscribed + stats.failed) / stats.total) * 100)
            : 0;

    // ── Auth Gate ──────────────────────────────────────────────────────────────
    if (!authed) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
                <div className="w-full max-w-sm">
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-6 h-6 text-zinc-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-xl font-semibold text-white">Admin Access</h1>
                        <p className="text-zinc-500 text-sm mt-1">
                            Newsletter Automation Dashboard
                        </p>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
                        <input
                            type="password"
                            placeholder="Enter admin secret"
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                        />
                        <button
                            onClick={handleAuth}
                            className="w-full bg-white text-zinc-900 font-medium py-3 rounded-xl text-sm hover:bg-zinc-100 transition-colors"
                        >
                            Access Dashboard
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ── Dashboard ──────────────────────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <div className="max-w-4xl mx-auto p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <h1 className="text-2xl font-semibold">Newsletter Automation</h1>
                        <p className="text-zinc-500 text-sm mt-0.5">
                            theoperatorai.substack.com
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        {stats && <StatusBadge status={stats.state.status} />}
                        <button
                            onClick={() => {
                                const s = localStorage.getItem('admin_secret') ?? secret;
                                fetchStats(s);
                            }}
                            disabled={loading}
                            className="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-800"
                        >
                            <svg
                                className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Message Toast */}
                {message && (
                    <div
                        className={`rounded-xl px-4 py-3 text-sm border ${message.type === 'success'
                                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                : message.type === 'error'
                                    ? 'bg-red-500/10 border-red-500/20 text-red-400'
                                    : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                            }`}
                    >
                        {message.text}
                    </div>
                )}

                {/* Stats Grid */}
                {stats && (
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                {
                                    label: 'Total',
                                    value: stats.total,
                                    color: 'text-white',
                                },
                                {
                                    label: 'Subscribed',
                                    value: stats.subscribed,
                                    color: 'text-emerald-400',
                                },
                                {
                                    label: 'Pending',
                                    value: stats.pending,
                                    color: 'text-amber-400',
                                },
                                {
                                    label: 'Failed',
                                    value: stats.failed,
                                    color: 'text-red-400',
                                },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
                                >
                                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                    <p className={`text-3xl font-semibold mt-2 ${stat.color}`}>
                                        {stat.value.toLocaleString()}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                            <div className="flex justify-between text-sm mb-3">
                                <span className="text-zinc-400">Overall Progress</span>
                                <span className="text-white font-medium">
                                    {progressPercent}%
                                </span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                            <div className="flex justify-between text-xs text-zinc-600 mt-2">
                                <span>
                                    Last processed: {formatDate(stats.state.last_processed_at)}
                                </span>
                                <span>
                                    {stats.subscribed + stats.failed} / {stats.total}
                                </span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                            <h2 className="text-sm font-medium text-zinc-400 mb-4">
                                Automation Controls
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => handleControl('start')}
                                    disabled={
                                        actionLoading || stats.state.status === 'running'
                                    }
                                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    Start
                                </button>

                                <button
                                    onClick={() => handleControl('pause')}
                                    disabled={
                                        actionLoading || stats.state.status !== 'running'
                                    }
                                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                    </svg>
                                    Pause
                                </button>

                                <button
                                    onClick={() => {
                                        if (
                                            confirm(
                                                'Reset counters? Emails stay in DB but progress resets.'
                                            )
                                        ) {
                                            handleControl('reset');
                                        }
                                    }}
                                    disabled={actionLoading}
                                    className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        />
                                    </svg>
                                    Reset
                                </button>
                            </div>
                            <p className="text-zinc-600 text-xs mt-3">
                                Cron runs every 5 min — processes one email per run (~288/day).
                                Adjust in vercel.json for faster processing.
                            </p>
                        </div>
                    </>
                )}

                {/* CSV Upload */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                    <h2 className="text-sm font-medium text-zinc-400 mb-4">
                        Upload CSV
                    </h2>
                    <p className="text-zinc-600 text-xs mb-4">
                        CSV must have an <code className="text-zinc-400">email</code>{' '}
                        column header. Duplicates are automatically skipped.
                    </p>

                    <div className="space-y-3">
                        <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-zinc-700 hover:border-zinc-500 rounded-xl cursor-pointer transition-colors">
                            <div className="flex flex-col items-center">
                                <svg
                                    className="w-6 h-6 text-zinc-500 mb-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>
                                <span className="text-sm text-zinc-400">
                                    {selectedFile ? selectedFile.name : 'Click to select CSV'}
                                </span>
                                {selectedFile && (
                                    <span className="text-xs text-zinc-600 mt-1">
                                        {(selectedFile.size / 1024).toFixed(1)} KB
                                    </span>
                                )}
                            </div>
                            <input
                                type="file"
                                accept=".csv"
                                className="hidden"
                                onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)}
                            />
                        </label>

                        <button
                            onClick={handleUpload}
                            disabled={!selectedFile || uploadLoading}
                            className="w-full bg-white text-zinc-900 font-medium py-3 rounded-xl text-sm hover:bg-zinc-100 disabled:bg-zinc-700 disabled:text-zinc-500 transition-colors"
                        >
                            {uploadLoading ? 'Uploading...' : 'Upload & Import Emails'}
                        </button>
                    </div>
                </div>

                {/* Info box */}
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-5">
                    <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                        How it works
                    </h3>
                    <ul className="space-y-2 text-sm text-zinc-500">
                        <li className="flex gap-2">
                            <span className="text-zinc-600">1.</span>
                            Upload your CSV → emails are stored in Supabase
                        </li>
                        <li className="flex gap-2">
                            <span className="text-zinc-600">2.</span>
                            Press Start → cron job activates
                        </li>
                        <li className="flex gap-2">
                            <span className="text-zinc-600">3.</span>
                            Every 5 min, one email is subscribed to Substack
                        </li>
                        <li className="flex gap-2">
                            <span className="text-zinc-600">4.</span>
                            Failed emails retry up to 3 times automatically
                        </li>
                        <li className="flex gap-2">
                            <span className="text-zinc-600">5.</span>
                            Upload another CSV anytime — duplicates are skipped
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}