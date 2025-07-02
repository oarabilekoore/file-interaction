import "./app.css";
import { DocumentCard } from "./components/FileCard";

export function App() {
	return (
		<div className="light w-full h-screen p-8 grid grid-cols-8 gap-8 bg-[var(--md-sys-color-inverse-on-surface)] overflow-auto">
			<DocumentCard fileExtension="pdf" />
			<DocumentCard fileExtension="docx" />
			<DocumentCard fileExtension="xlsx" />
			<DocumentCard fileExtension="pptx" />
			<DocumentCard fileExtension="txt" />
			<DocumentCard fileExtension="csv" />
			<DocumentCard fileExtension="json" />
			<DocumentCard fileExtension="xml" />

			<DocumentCard fileExtension="html" />
			<DocumentCard fileExtension="css" />
			<DocumentCard fileExtension="js" />
			<DocumentCard fileExtension="ts" />
			<DocumentCard fileExtension="py" />
			<DocumentCard fileExtension="java" />
			<DocumentCard fileExtension="cpp" />
			<DocumentCard fileExtension="sql" />

			<DocumentCard fileExtension="png" />
			<DocumentCard fileExtension="jpg" />
			<DocumentCard fileExtension="svg" />
			<DocumentCard fileExtension="gif" />
			<DocumentCard fileExtension="mp4" />
			<DocumentCard fileExtension="mp3" />
			<DocumentCard fileExtension="wav" />
			<DocumentCard fileExtension="avi" />

			<DocumentCard fileExtension="zip" />
			<DocumentCard fileExtension="rar" />
			<DocumentCard fileExtension="tar" />
			<DocumentCard fileExtension="gz" />
			<DocumentCard fileExtension="md" />
			<DocumentCard fileExtension="rtf" />
			<DocumentCard fileExtension="odt" />
			<DocumentCard fileExtension="eps" />
		</div>
	);
}
