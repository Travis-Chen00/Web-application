import React, { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './addService.scss'


function AddService() {
  const [value, setValue] = useState('');

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
        />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Wait to be valid
          </span>
          <input style={{display:"none"}} type='file' id='file' name=''></input>
          <label className='file' htmlFor='file'>Upload Image</label>
          <div className='buttons'>
          <button>Save as Draft</button>
          <button>Publish</button>
        </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='Category'>
            <input type='radio' name='category' value='clean' id='clean'/>
            <label htmlFor='clean'>Cleaning</label>
          </div>
          <div className='Category'>
            <input type='radio' name='category' value='babyset' id='babyset'/>
            <label htmlFor='clean'>Babysetting</label>
          </div>
          <div className='Category'>
            <input type='radio' name='category' value='pest' id='pest'/>
            <label htmlFor='clean'>Pest Control</label>
          </div>
          <div className='Category'>
            <input type='radio' name='category' value='plumbing' id='plumbing'/>
            <label htmlFor='clean'>Plumbing</label>
          </div>
          <div className='Category'>
            <input type='radio' name='category' value='repair' id='repair'/>
            <label htmlFor='clean'>Electrical Repairs</label>
          </div>
          <div className='Category'>
            <input type='radio' name='category' value='beauty' id='beauty'/>
            <label htmlFor='clean'>Beauty</label>
          </div>
          <div className='Category'>
            <input type='radio' name='category' value='others' id='others'/>
            <label htmlFor='clean'>Others</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddService