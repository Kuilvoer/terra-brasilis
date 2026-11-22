import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackTitle?: string;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('[Terra Brasilis ErrorBoundary caught an error]:', error, errorInfo);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  public override render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="w-full py-16 px-4 flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-2xl border border-brand-sand shadow-card p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-surfaceMuted flex items-center justify-center text-brand-terracotta">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-serif font-bold text-brand-espresso mb-2">
              {this.props.fallbackTitle || 'A Momentary Interruption'}
            </h2>
            <p className="text-sm font-sans text-brand-slate mb-6">
              This expedition dispatch encountered an unexpected error. You can refresh this section or continue exploring other regions.
            </p>
            {this.state.error && (
              <pre className="text-xs font-mono bg-brand-surfaceMuted text-brand-slate p-3 rounded-lg overflow-x-auto text-left mb-6 max-h-32">
                {this.state.error.message}
              </pre>
            )}
            <button
              type="button"
              onClick={this.handleReset}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-espresso text-white text-sm font-medium hover:bg-brand-slate transition-colors duration-160 shadow-sm"
            >
              Retry Section
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
