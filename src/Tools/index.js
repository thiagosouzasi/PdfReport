import pdfMage from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMage.vfs = pdfFonts.pdfMake.vfs;

export default{

    genareteReport : (title,subtitle,body,type)=>{
        const docDenifition = {
            content:[
               {
                text: title,
                style: 'titles'
               },
               {
                text: `\n\n ${subtitle} \n\n`,
                style: 'subtitle'
               },
               {
                text: body,
                style: 'text'
               },
            ],

            styles:{
                subtitle:{                   
                    fontSize:16,
                    bold:true
                },
                titles:{
                    alignment:'center',
                    fontSize:18,
                    bold:true
                },
                text:{
                    alignment:'justify'
                },
            }
            
        }

        type === 0 ? pdfMage.createPdf(docDenifition).download() : pdfMage.createPdf(docDenifition).open();

        
    }

}