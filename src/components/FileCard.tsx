import { useState } from "preact/hooks";
import { FileButton } from "./Buttons";
import type { FileExtension } from "./Buttons";
import { Archive, Trash, Info } from "lucide-preact";

export function DocumentCard({ fileExtension }: { fileExtension: FileExtension }) {
	const [isRevealed, setRevealed] = useState<boolean>(false);

	const handleClick = () => {
		setRevealed(!isRevealed);
	};

	return (
		<div className="relative">
			<div className="fixed">
				<div className="absolute inset-0 z-10 p-8 rounded-xl rounded-tl-4xl bg-gray-300 flex flex-wrap flex-col items-baseline-last justify-between">
					<Archive className="cursor-pointer" />
					<Trash className="cursor-pointer" />
					<Info className="cursor-pointer" />
				</div>

				<div
					className={`relative z-20 p-8 rounded-xl rounded-tl-4xl bg-[var(--md-sys-color-surface)] cursor-pointer transition-transform duration-200 focus ${
						isRevealed ? "transform -translate-y-4 -translate-x-20 shadow-2xl" : ""
					}`}
					style={{
						transitionTimingFunction: `cubic-bezier(0, 1.3, 1, 1)`,
						transitionDuration: "0.30ss",
					}}
					onClick={handleClick}
				>
					<div className="flex flex-col flex-wrap justify-center items-center">
						<div className="flex flex-wrap justify-start w-full">
							<div className="h-3 bg-gray-200 rounded-full w-4/4 mb-2"></div>
							<div className="h-3 bg-gray-200 rounded-full w-1/2 mb-8"></div>
							<FileButton fileExtension={fileExtension}></FileButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
