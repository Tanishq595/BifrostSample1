import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Dot AI</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/wallet" className="transition-colors hover:text-primary">
            Wallet
          </Link>
          <Link href="/transaction" className="transition-colors hover:text-primary">
            Send Transaction
          </Link>
          <Link href="/contract" className="transition-colors hover:text-primary">
            Write Contract
          </Link>
          <Link href="/mint" className="transition-colors hover:text-primary">
            Mint/Redeem LST Bifrost
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/bifrost-io" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <a href="https://twitter.com/Bifrost">
          <Button variant="ghost" size="sm">
            Contact
          </Button></a>
          <a href="https://github.com/buildstationorg/dotui">
  <Button size="sm">
    Deploy Now
          </Button></a>
        </div>
      </div>
    </header>
  )
}

