import LanguageProvider from './Language';

export default function RootContext ({ children }) {
  return (
    <>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </>
  )
}