
const ReactPrice=(props)=>{
    
    const {type,month,user,storage,projects,access,PrivatePro,dedicate,subdomain,Monthstatus}=props
            return(
                <>
                
                    <div class='borderinside'>
                    <p class="type">{type}</p>
                    <h1>{month}</h1>
                    <span>----------------------</span><br></br>
                    <span class="List">
                        <pre>
                        {user}      <br></br><br></br>
                        {storage}  <br></br><br></br>
                        {projects}<br></br><br></br>
                        {access}<br></br><br></br>
                        {PrivatePro}<br></br><br></br>
                        {dedicate}<br></br><br></br>
                        {subdomain}<br></br><br></br>
                        {Monthstatus}
                        </pre>
                    </span>
                    <button> Button</button>

                    </div>
                    
                
                </>
            )
}
export default ReactPrice