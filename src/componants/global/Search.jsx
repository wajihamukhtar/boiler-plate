import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState([])
    let employess = [
      {
        name: "John Doe",
        post: "Software Engineer"
      },
      {
        name: "Jane Smith",
        post: "Product Manager"
      },
      {
        name: "Alice Johnson",
        post: "UX Designer"
      },
      {
        name: "Bob Brown",
        post: "Data Scientist"
      }
    ]
    useEffect(() => {
      if (searchValue === '') {
        setData(employess)
      }
      else {
        setData(data)
      }
    }, [searchValue])
  
    const handleChange = (e) => {
      setSearchValue(e.target.value)
    }
  
    const handleSearch = (value, data) => {
      const filteredData = data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      setData(filteredData)
      return filteredData ? filteredData : data
    }
    return (
      <>
        <InputField
             icon={<SearchIcon/>}
              type={'text'}
              placeholder={'search files..'}
              onChange={handleChange}
              name={'search'}
              value={searchValue}
              style={{
                fontSize: '13px',
                fontWeight: 400,
                border: '2px solid #E4E4E4',
                height: '30px',
              }}
            />
        <SubmitButton
            text={'Search'}
            onClick={() => handleSearch(searchValue, employess)}
            type={'submit'}
            style={{
              width: '10%',
              height: '30px',
              fontSize: '12px',
              fontWeight: 500,
              borderRadius: '10px',
              color:'common.white',
              backgroundColor:'button.color.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
              },
            }}
          />
        {/* <h3>{'Emplpyees'}</h3>
        <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
          {data?.length === 0 ? <h3>{'No data found'}</h3> : null}
          {data?.map((item, index) => (
            <div key={index} style={{ border: '1px solid black', width: '300px', height: '400px', padding: '20px' }}>
              <h3>{item.name}</h3>
              <h6>{item.post}</h6>
            </div>
          ))}
        </div> */}
      </>
    );
  };
  export default Search;
