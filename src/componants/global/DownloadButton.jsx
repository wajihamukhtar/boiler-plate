import { Button } from "@mui/material";

const DownloadButton = ({ text, onClick , variant,disabled, type,style}) => (
   text && (
    <Button
        onClick={onClick}
        variant={variant}
        type={type}
        disabled={disabled}
        sx={style}
    >
        {text}
    </Button>
   ) 
);
export default DownloadButton;

// const handleDownload = (params) => {
//     const fileData = params.row.docBase64;
//     if (fileData) {
//         const link = document.createElement('a');
//         link.href = fileData;
//         link.download = 'syllabus.pdf';
//         link.click();
//     } else {
//         console.log('No file data available');
//     }
// };