export type FileExtension =
	| "pdf"
	| "docx"
	| "xlsx"
	| "pptx"
	| "txt"
	| "csv"
	| "json"
	| "xml"
	| "html"
	| "css"
	| "js"
	| "ts"
	| "py"
	| "java"
	| "cpp"
	| "sql"
	| "png"
	| "jpg"
	| "svg"
	| "gif"
	| "mp4"
	| "mp3"
	| "wav"
	| "avi"
	| "zip"
	| "rar"
	| "tar"
	| "gz"
	| "md"
	| "rtf"
	| "odt"
	| "eps"
	| "xls";

export function FileButton({ fileExtension }: { fileExtension: FileExtension }) {
	let button_class = "p-3 pl-8 pr-8 rounded font-bold w-full ";

	switch (fileExtension) {
		// Document files
		case "pdf":
			button_class += "bg-red-100 text-red-500";
			break;
		case "docx":
		case "odt":
		case "rtf":
			button_class += "bg-blue-100 text-blue-500";
			break;
		case "xlsx":
		case "xls":
		case "csv":
			button_class += "bg-green-100 text-green-500";
			break;
		case "pptx":
			button_class += "bg-orange-100 text-orange-500";
			break;
		case "txt":
		case "md":
			button_class += "bg-gray-100 text-gray-600";
			break;

		// Code files
		case "html":
			button_class += "bg-orange-100 text-orange-600";
			break;
		case "css":
			button_class += "bg-blue-100 text-blue-600";
			break;
		case "js":
			button_class += "bg-yellow-100 text-yellow-600";
			break;
		case "ts":
			button_class += "bg-blue-100 text-blue-700";
			break;
		case "py":
			button_class += "bg-green-100 text-green-600";
			break;
		case "java":
			button_class += "bg-red-100 text-red-600";
			break;
		case "cpp":
			button_class += "bg-blue-100 text-blue-800";
			break;
		case "sql":
			button_class += "bg-purple-100 text-purple-600";
			break;

		// Data files
		case "json":
			button_class += "bg-yellow-100 text-yellow-700";
			break;
		case "xml":
			button_class += "bg-green-100 text-green-700";
			break;

		// Image files
		case "png":
		case "jpg":
		case "gif":
			button_class += "bg-pink-100 text-pink-600";
			break;
		case "svg":
			button_class += "bg-purple-100 text-purple-500";
			break;
		case "eps":
			button_class += "bg-indigo-100 text-indigo-600";
			break;

		// Media files
		case "mp4":
		case "avi":
			button_class += "bg-red-100 text-red-600";
			break;
		case "mp3":
		case "wav":
			button_class += "bg-green-100 text-green-700";
			break;

		// Archive files
		case "zip":
		case "rar":
		case "tar":
		case "gz":
			button_class += "bg-yellow-100 text-yellow-800";
			break;

		default:
			// Default fallback
			button_class += "bg-gray-100 text-gray-500";
	}

	return <button className={button_class}>{"." + fileExtension.toUpperCase()}</button>;
}
