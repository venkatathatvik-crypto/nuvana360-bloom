import React from "react";

type Props = { children: React.ReactNode; fallback?: React.ReactNode };

type State = { hasError: boolean; error?: Error };

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="min-h-screen grid place-items-center p-6">
          <div className="max-w-md w-full rounded-2xl glass-strong p-6 text-center">
            <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">An unexpected error occurred. Try reloading the page.</p>
            <button
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => location.reload()}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;