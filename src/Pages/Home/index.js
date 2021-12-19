import React, { useState } from 'react';
import '../../global.css';
import './home.css';


export default function Home(){

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [body, setBody] = useState('');


    return(
        <main id="container">
            <form action="" id="report">
                <div id="header">
                    <p>Gerar Relatório</p>
                </div>
                <div id="imputsReport">
                    <label htmlFor='login'>Título</label>
                    <input placeholder='Informe o título do relatório' required  value={title} type='email' onChange={(e)=>{setTitle(e.target.value)}} />
                    <label htmlFor='login'>Subtítulo</label>
                    <input placeholder='Informe um subtítulo para o relatório' type='password' required value={subTitle} onChange={(e)=>{setSubTitle(e.target.value)}}/>
                    <label htmlFor='login'>Texto</label>
                    <input placeholder='Digite o texto para o relatório' type='text' required value={body} onChange={(e)=>{setBody(e.target.value)}}/>
                </div>
                <div id="btnReport">
                    <button onClick={()=>{}}>Baixar PDF</button>
                    <button onClick={()=>{}} >Abrir em nova aba</button>
                </div>
            </form>
        </main>
    );
}
