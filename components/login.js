import Image from "next/image"
import { useMoralis } from "react-moralis"

function Login() {
    const {authenticate} = useMoralis();

    return (
        <div className="bg-black relative text-white">
          <h1>Im the login Screen</h1>  

          <div className="flex flex-col absolute z-50 h-4/6 w-full 
                          items-center justify-Center space-y-4" >
                <Image objectFit="cover" src="https://sdk.bitmoji.com/render/panel/74199580-3d4e-4477-8454-45c0e64aaa76-14ae0aee-36a7-4bf2-abfa-e938b27155a1-v1.png?transparent=1&palette=1" 
                height={200} width={200}
                />
                <button onClick={authenticate} className="bg-black rounded-lg p-5 animate-pulse">Log in to Metaverse</button>
            </div>

            <div className="w-full h-screen">
                <Image src="https://visualise.com/wp-content/uploads/2017/09/Metaverse-1020x620-c-default.png" layout = "fill"
                objectFit="cover"
                />

            </div>


        </div>


    )
}

export default Login
