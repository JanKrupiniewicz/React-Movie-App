import Button from "./UI/Button";

export default function Header() {
    return (
        <header className="flex text-white justify-between p-5 bg-red-400">
            <div className="flex flex-row items-center space-x-2">
                <img className="h-12" src="logo.png" alt="Movie Logo" />
                <p className="text-2xl font-bold uppercase">
                    Rate Movies App
                </p>
            </div>
            <Button
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full" 
            >
                Rated by You (0)
            </Button>
        </header>
    );
}