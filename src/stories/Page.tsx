import React from 'react';
import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

interface PageProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: PageProps) => (
  <article>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />
    <section className="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a{' '}
        <a
          href="https://componentdriven.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>component-driven</strong>
        </a>{' '}
        process starting with atomic components and ending with pages.
      </p>
    </section>
  </article>
);
