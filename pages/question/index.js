import supabase from '../../utils/supabase'
const Index = ({ ques }) => {

  const url = process.env.NEXT_PUBLIC_URL;
  console.log(url)

  return (
    <div>
      <pre>{JSON.stringify(ques)}</pre>
    </div>
  )
}

export async function getStaticProps(){
  const {data:ques,error} = await supabase.from("Questions").select('*')
  if(error){
    throw new Error(error.toString());
  }
  return {
    props:{

      ques,

    }
  }
}

export default Index