import React, { useState } from 'react';
import '../../global.css';
import './home.css';
import Tools from '../../Tools';


export default function Home(){

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [body, setBody] = useState('');

    const makePDF = (type)=>{
        try {
            Tools.genareteReport(title,subTitle,body,type);
        } catch (error) {
            console.log(`Erro ao gerar pdf ->> ${error}`);
        }
    }

    return(
        <main id="container">
            <form id="report">
                <div id="header">
                    <p>Gerar Relatório</p>
                </div>
                <div id="imputsReport">
                    <label htmlFor='login'>Título</label>
                    <input placeholder='Informe o título do relatório' required  value={title} type='email' onChange={(e)=>{setTitle(e.target.value)}} />
                    <label htmlFor='login'>Subtítulo</label>
                    <input placeholder='Informe um subtítulo para o relatório'  required value={subTitle} onChange={(e)=>{setSubTitle(e.target.value)}}/>
                    <label htmlFor='login'>Texto</label>
                    <textarea value={body} type="text" rows="5"  onChange={(e)=>{setBody(e.target.value)}} placeholder='Digite o texto para o relatório'  required value={body} onChange={(e)=>{setBody(e.target.value)}} />
                </div>
                <div id="btnReport">
                    <button type='submit' onClick={()=>{makePDF(0)}}>Baixar PDF</button>
                    <button type='submit' onClick={()=>{makePDF(1)}} >Abrir em nova aba</button>
                </div>
            </form>
        </main>
    );
}
