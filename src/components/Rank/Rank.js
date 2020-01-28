import React from 'react' 

const Rank = ({name, entries}) => {
    return(
    <div>
        {`${name} , you've tried  this...`}
      <div className='white f1 '>
        {`${entries} times!`}
      </div>
    </div>
    );
}

export default Rank