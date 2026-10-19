declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | number[] | [number, number, number, number] | [number, number];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: { scale?: number; useCORS?: boolean; letterRendering?: boolean; [key: string]: any };
    jsPDF?: { unit?: string; format?: string; orientation?: string; [key: string]: any };
    pagebreak?: { mode?: string | string[]; before?: string | string[]; after?: string | string[]; [key: string]: any };
    [key: string]: any;
  }

  interface Html2PdfInstance {
    set(opt: Html2PdfOptions): Html2PdfInstance;
    from(element: HTMLElement | string): Html2PdfInstance;
    save(): Promise<void>;
    outputPdf(type?: string): Promise<any>;
  }

  function html2pdf(): Html2PdfInstance;
  function html2pdf(element: HTMLElement | string, opt?: Html2PdfOptions): Promise<void> | Html2PdfInstance;

  export default html2pdf;
}
