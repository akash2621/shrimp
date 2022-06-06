import { useEffect, useState } from "react";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Keypair,
  Transaction,
} from "@solana/web3.js";
// import * as bs58 from "bs58";
import phantom from "../../assets/phantom.png";
import "./Wallet.css";

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

function Wallet() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined
  );
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
    undefined
  );

  /**
    * @description gets Phantom provider, if it exists
  */
  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) return provider as PhantomProvider;
    }
  };

  /**
    * @description prompts user to connect wallet if it exists
  */
  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;
    if (solana) {
      try {
        const response = await solana.connect();
        console.log(response);
        console.log("wallet account ", response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };
  
  /**
   * @description disconnect Phantom wallet
   */
  const disconnectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (walletKey && solana) {
      await (solana as PhantomProvider).disconnect();
      setWalletKey(undefined);
    }
  };

  // detect phantom provider exists
  useEffect(() => {
    const provider = getProvider();

    if (provider) setProvider(provider);
    else setProvider(undefined);
  }, []);

  
  
 
  return (
    <div className="App">
      <header className="App-header">
        {provider && !walletKey && (
          <button onClick={connectWallet} >
            <img src={phantom} alt="phantom" />Connect 
          </button>
        )}

        {provider && walletKey && (
          <div className="connected-account" >
            {/* <p>{walletKey}</p> */}
            <button onClick={disconnectWallet} ><img src={phantom} alt="phantom" />  Disconnect</button>
          </div>
        )}
      </header>
      </div>
    
  );
}

export default Wallet;