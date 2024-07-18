// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import parse from 'autosuggest-highlight/parse';
// import match from 'autosuggest-highlight/match';

// export default function Search() {
//   return (
//     <Autocomplete
//       sx={{ width: 300 }}
//       options={top100Films}
//       getOptionLabel={(option) => option.title}
//       renderInput={(params) => (
//         <TextField {...params} label="Search" margin="normal" />
//       )}
//       renderOption={(props, option, { inputValue }) => {
//         const { key, ...optionProps } = props;
//         const matches = match(option.title, inputValue, { insideWords: true });
//         const parts = parse(option.title, matches);

//         return (
//           <li key={key} {...optionProps}>
//             <div>
//               {parts.map((part, index) => (
//                 <span
//                   key={index}
//                   style={{
//                     fontWeight: part.highlight ? 700 : 400,
//                   }}
//                 >
//                   {part.text}
//                 </span>
//               ))}
//             </div>
//           </li>
//         );
//       }}
//     />
//   );
// }
