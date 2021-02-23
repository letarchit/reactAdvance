import {useEffect} from 'react';

export default function useDocumentTitle(e) {
    useEffect(() => {
    document.title = e;

    return () => {
     
    };
  });
}
 