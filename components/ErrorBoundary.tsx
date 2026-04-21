import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  /**
   * Optional custom fallback. Receives the caught error plus a reset
   * callback that clears the error state so the children are retried.
   */
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

/**
 * Catches render-time errors anywhere in the React tree below it and
 * renders a styled, screen-reader-friendly fallback instead of a
 * blank page. Only class components can be error boundaries (see
 * https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary).
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  override state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    // Surface to the browser console so devtools + error trackers
    // can still pick it up.
    console.error("Unhandled React error:", error, info.componentStack);
  }

  private readonly reset = () => this.setState({ error: null });

  override render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    if (this.props.fallback) {
      return this.props.fallback(error, this.reset);
    }

    return (
      <div
        role="alert"
        className="min-h-screen flex items-center justify-center bg-tui-bg text-tui-fg font-mono px-6"
      >
        <div className="max-w-md border border-tui-red p-6 space-y-4">
          <p className="text-tui-red text-lg">$ ./portfolio --crashed</p>
          <p className="text-sm text-tui-muted">
            Something went wrong rendering this page. The error was logged to
            the console.
          </p>
          <pre className="text-xs text-tui-muted whitespace-pre-wrap break-words">
            {error.message}
          </pre>
          <button
            type="button"
            onClick={this.reset}
            className="text-sm text-tui-cyan hover:text-tui-green link-underline"
          >
            <span aria-hidden="true">↻</span> Retry
          </button>
        </div>
      </div>
    );
  }
}
