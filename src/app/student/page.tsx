"use client";

import { AlertCircle, ArrowLeft, Loader2, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";

export default function StudentLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both your email address/username and password.");
      return;
    }

    setLoading(true);

    // Mock API call to simulate validation
    setTimeout(() => {
      setLoading(false);
      // Success - redirect to dashboard
      router.push("/student/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-[80vh] bg-[#f8f9fa] py-16 px-4 flex flex-col justify-center items-center">
      {/* Back link */}
      <div className="mb-6 w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-clinical transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="w-full max-w-md bg-white border border-line rounded-lg shadow-md overflow-hidden">
        {/* Header decoration */}
        <div className="bg-navy px-6 py-5 flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded">
            <Lock size={18} className="text-teal" />
          </div>
          <div>
            <h1 className="text-base font-extrabold text-white leading-none">
              NCLEX Prep Nation
            </h1>
            <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-1">
              Candidate Login Portal
            </p>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8">
          <h2 className="text-xl font-bold text-navy">Sign In</h2>
          <p className="text-xs text-muted mt-1 leading-relaxed">
            Please enter your registered email address or username and password to access your study plans, mock exams, and diagnostic summaries.
          </p>

          {error && (
            <div className="mt-5 flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-md p-3 text-xs text-red-700 animate-fadeIn">
              <AlertCircle size={15} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5"
              >
                Email Address or Username
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="candidate@example.com"
                className="form-field text-sm"
                disabled={loading}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold text-navy uppercase tracking-wider"
                >
                  Password
                </label>
                <Link
                  href="/contact"
                  className="text-xs text-clinical hover:underline font-semibold"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="form-field text-sm"
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-6 bg-clinical hover:bg-navy font-bold flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </Button>
          </form>
        </div>

        {/* Footer info */}
        <div className="border-t border-line bg-[#f8f9fa] px-6 py-4 text-center">
          <p className="text-[11px] text-muted">
            Need an account?{" "}
            <Link
              href="/request-access"
              className="text-clinical hover:underline font-bold"
            >
              Request Portal Access Now
            </Link>
          </p>
        </div>
      </div>

      {/* Trust Badge / Disclaimer */}
      <div className="mt-8 text-center max-w-sm">
        <p className="text-[10px] leading-relaxed text-slate-400">
          This login portal is secured. Your credentials are encrypted during transmission. NCLEX® is a registered trademark of the NCSBN.
        </p>
      </div>
    </div>
  );
}
