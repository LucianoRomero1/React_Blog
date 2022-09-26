import React from 'react'
import { useState } from 'react'
import { Ajax } from '../../helpers/Ajax'
import { Global } from '../../helpers/Global'
import { useForm } from '../../hooks/useForm'


export const CreateArticle = () => {

  const {form, sended, changed} = useForm({});
  const [result, setResult] = useState("unsended");

  const saveArticle = async(e) => {
    e.preventDefault();
    let newArticle = form;

    const {data, loading} = await Ajax(Global.url + 'create', 'POST', newArticle);
    if(data.status === 'success'){
      setResult("saved");

      const fileInput = document.querySelector('#file');
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);

      //El ultimo true es para avisarle a la funcion esa, que envio un archivo
      const upload = await Ajax(Global.url + 'upload-file/'+data.article._id, 'POST', formData, true);

      if(upload.data.status === "success"){
        setResult("saved");
      }else{
        setResult("error");
      }

    }else{
      setResult("error");
    }

    console.log(result);
  }


  return (
    <div className='jumbo'>
      	<h1>Create article</h1>
        <strong>{result == "saved" ? "Article has been created successfully" : ""}</strong>
        <strong>{result == "error" ? "Params not found" : ""}</strong>
        
        <form className='form' onSubmit={saveArticle}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' onChange={changed}/> 
          </div>
          <div className='form-group'>
            <label htmlFor='content'>Content</label>
            <textarea name='content' onChange={changed} /> 
          </div>
          <div className='form-group'>
            <label htmlFor='image'>Image</label>
            <input type='file' name='image' id="file" /> 
          </div>

          <input type='submit' value='Submit' className='btn btn-success' />
        </form>
    </div>
  )
}
