import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";


type Ingredient = {
  name: string
  price: number
  allergies?: string[]
  vendor?: Vendor
}

type Vendor = {
  name: string
  address: "string"
}



// Hook for getting a document from an API
export function useDocument<TDocument>(id: string): {document: TDocument | undefined} {
  const [document, setDocument] = useState<TDocument>()


  useEffect(() => {
    axios.get( `https.myCoolAPI.com/documents/${id}`)
      .then((response: AxiosResponse<TDocument>) => {
        const data = response.data
        setDocument(data)
      })
  }, [id])

  return {document}
}



const DisplayIngredient = () => {
  const id = "123"
  const {document} = useDocument<Ingredient>(id)

  if (document) {
  return <div>
      <Viewer document={document} />
    </div>
    }
  else {
    return <div>
      Document was undefined
    </div>
  }
}


const DisplayVendor = () => {
  const id = "123"
  const {document} = useDocument<Vendor>(id)

  if (document) {
  return <div>
      <Viewer document={document} />
    </div>
    }
  else {
    return <div>
      Document was undefined
    </div>
  }
}


const Viewer = <TDocument extends Vendor | Ingredient> (props: {document: TDocument}) => {

  console.log(props.document.price)
  console.log(props.document.vendor)
  console.log(props.document.name)
  return <div>document</div>

}





