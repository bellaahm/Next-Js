import { useRouter } from 'next/router';
import React from 'react';

const Params = () => {
    const router=useRouter()
    const {params=[]}=router.query //[1,2,3,4]
    if(params.length===1)
        return <div>
        Params of {params[0]}
          </div>
    else if(params.length===2)
          return <div>
          Params of {params[0]} , {params[1]}
          </div>
      return (
        <div>
            Paramss
        </div>
    );
}

export default Params;