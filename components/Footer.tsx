import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t mt-20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-muted-foreground">© {new Date().getFullYear()} ThumbGen. All rights reserved.</p>
            </div>
        </footer>
    );
}
