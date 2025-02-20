"use client"

import { Brain, Cloud, Shield, Zap } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import MintRedeem from "@/components/mint-redeem-lst-bifrost" // Import the MintRedeem component
import SendTransaction from "@/components/send-transaction"; // Import the SendTransaction component
import SigpassKit from "@/components/sigpasskit";
import Contract from "@/components/write-contract";

const features = [
  {
    name: "AI-Driven Analytics",
    description: "Leverage advanced algorithms to analyze market trends and make data-driven investment decisions.",
    icon: Brain,
  },
  {
    name: "Scalable Cloud Solutions",
    description: "Implement state-of-the-art security measures to safeguard your digital assets against threats and vulnerabilities.",
    icon: Cloud,
  },
  {
    name: "Robust Security Protocols",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "Optimized Performance Metrics",
    description: "Achieve unparalleled performance with our high-speed systems, ensuring rapid transaction processing and minimal latency.",
    icon: Zap,
  },
]

export default function Features() {
  const [walletAddress, setWalletAddress] = useState("")
  const [amount, setAmount] = useState("")
  const [token, setToken] = useState("xcDOT")
  const [transactionStatus, setTransactionStatus] = useState(null)
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false)

  const handleMint = () => {
    // Simulating a transaction
    setTransactionStatus("Transaction submitted")
    setIsStatusDialogOpen(true)
  }

  const handleApprove = () => {
    // Simulating an approval
    setTransactionStatus("Approval submitted")
    setIsStatusDialogOpen(true)
  }

  const handleSend = () => {
    // Simulating a transaction
    setTransactionStatus("Transaction submitted")
    setIsStatusDialogOpen(true)
  }

  const checkTransactionStatus = () => {
    // Simulating checking transaction status
    const isTransactionMade = Math.random() < 0.5 // 50% chance of transaction being made
    if (isTransactionMade) {
      setTransactionStatus("Transaction successful")
    } else {
      setTransactionStatus("No transaction submitted")
    }
    setIsStatusDialogOpen(true)
  }

  return (
    <section id="wallet" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Wallet</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Unlock your digital world: Create and connect your wallet for seamless transactions!
        </p>

        <div className="flex justify-center gap-4 mt-8">
          {/* <Button onClick={} size="lg">Create Wallet</Button>
          <Button variant="outline" size="lg">
            Connect Wallet
          </Button> */}
          <SigpassKit />
        </div>
      </div>

      {/* Send Transaction Section */}
      {/* <Card className="mx-auto max-w-[58rem] mt-12">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Send Transaction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="walletAddress">Wallet Address</Label>
            <Input
              id="walletAddress"
              placeholder="Enter wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <Button onClick={handleSend} size="lg" className="w-full">
            Send
          </Button>
          <Button onClick={checkTransactionStatus} variant="outline" size="lg" className="w-full">
            Check Transaction Status
          </Button>
        </CardContent>
      </Card> */}
      
      <div className="my-12"></div>

      {/* Mint/Redeem Section */}
      {/* <Card className="mx-auto max-w-[58rem]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Mint/Redeem LST Bifrost</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="token">Token</Label>
            <Select value={token} onValueChange={setToken}>
              <SelectTrigger id="token">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xcDOT">xcDOT</SelectItem>
                <SelectItem value="GLMR">GLMR</SelectItem>
                <SelectItem value="xcASTR">xcASTR</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mintAmount">Amount</Label>
            <Input
              id="mintAmount"
              type="number"
              placeholder="0.001"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.001"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tokenAllowance">Token Allowance</Label>
            <Input id="tokenAllowance" value="100%" readOnly className="bg-muted" />
          </div>
          <p className="text-sm text-muted-foreground">You are about to mint this token: {token}</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button onClick={handleApprove} variant="outline">
              Approve
            </Button>
            <Button onClick={handleMint}>Mint</Button>
          </div>
          <Button onClick={checkTransactionStatus} variant="outline" size="lg" className="w-full">
            Check Transaction Status
          </Button>
        </CardContent>
      </Card> */}
      



      {/* Transaction Status Dialog */}
      <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transaction Status</DialogTitle>
          </DialogHeader>
          <Alert>
            <AlertTitle>Status</AlertTitle>
            <AlertDescription>{transactionStatus || "No transaction submitted"}</AlertDescription>
          </Alert>
        </DialogContent>
      </Dialog>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

