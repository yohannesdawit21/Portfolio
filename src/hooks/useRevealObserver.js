import { useEffect } from 'react';

export const useRevealObserver = () => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const revealImmediately = () => {
      document.querySelectorAll('[data-reveal]').forEach((element) => {
        element.classList.add('is-visible');
      });
    };

    if (typeof window.IntersectionObserver !== 'function') {
      revealImmediately();
      return undefined;
    }

    document.documentElement.classList.add('reveal-ready');

    const observed = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            observed.delete(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const register = (element) => {
      if (!element || observed.has(element) || element.classList.contains('is-visible')) {
        return;
      }

      observed.add(element);
      observer.observe(element);
    };

    document.querySelectorAll('[data-reveal]').forEach(register);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.matches('[data-reveal]')) {
            register(node);
          }

          node.querySelectorAll('[data-reveal]').forEach(register);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observed.forEach((element) => observer.unobserve(element));
      observer.disconnect();
      mutationObserver.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);
};
