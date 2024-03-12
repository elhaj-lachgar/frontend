function AuthLayout({children} : { children : React.ReactNode}) {
  return (
    <main className="flex min-h-screen w-full justify-center items-center ">
      {children}
    </main>
  )
}

export default AuthLayout
