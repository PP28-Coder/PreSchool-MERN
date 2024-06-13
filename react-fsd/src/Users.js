import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import cors from 'cors';

function Survey() {
  const navigate = useNavigate();
  const [id,setID] = useState('');
  const [vignette,setVignetter] = useState('');
  const [sex,setSex] = useState('');
  const [age,setAge] = useState('');
  const [edu,setEdu] = useState('');
  const [mar,setMar] = useState('');
  const [hlt,setHlt] = useState('');
  const [qual,setQual] = useState('');
  const [hap,setHap] = useState('');
  const [npo,setNpo] = useState('');

  const setData = {
    id: id,
    vignset: vignette,
    sex: sex,
    age: age,
    q1000: edu,
    q1001: mar,
    q1005: npo,
    q1002: hlt,
    q1003: qual,
    q1004: hap
  };

  const insert = async (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3099/insert',setData).then((response) => {
      console.log((response.data));
    });
  }

  return (
    <div className='d-flex vh-150  justify-content-center align-items-center bg-primary'>
        <div className='p-3 bg-white rounded-start rounded-end w-50'>
          <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
          <h1>Survey</h1>
          </div>
          <form action="">
          <div className='mb-3'>
            <label htmlFor='ID'>ID</label><br/>
            <input type="number" name="id" value={id} className='form-control' onChange={(e) =>{setID(e.target.value)}}/> 
          </div>
          <div className='mb-3'>
            <label htmlFor='vignset'>Which vignette set is being used?</label><br/>
            <div className='form-control'>
            <div><input type='radio' value='A' name='vignset' checked={vignette === 'A'} onChange={(e) => setVignetter(e.target.value)} />{' '} Vignette A</div>
            <div><input type="radio" value='B' name='vignset' checked={vignette === 'B'} onChange={(e) => setVignetter(e.target.value)} />{' '} Vignette B</div>
            <div><input type="radio" value='C' name='vignset' checked={vignette === 'C'} onChange={(e) => setVignetter(e.target.value)} />{' '} Vignette C</div> 
            <div><input type="radio" value='D' name='vignset' checked={vignette === 'D'} onChange={(e) => setVignetter(e.target.value)} />{' '} Vignette D</div>
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='sex'>Sex</label><br/>
            <div className='form-control'>
            <div><input type="radio" value="Male" name="sex" checked={sex === 'Male'} onChange={(e) => setSex(e.target.value)} />{' '} Male</div>
            <div><input type="radio" value="Female" name="sex" checked={sex === 'Female'} onChange={(e) => setSex(e.target.value)} />{' '} Female</div>
            </div>
            
          </div>
          <div className='mb-3'>
            <label htmlFor='age'>Age</label><br/>
            <input type="number" name="age" value={age} className='form-control' onChange={(e) => setAge(e.target.value)}/> 
          </div>
          <div className='mb-3'>
            <label htmlFor='edu'>Highest level of education</label><br/>
            <div className='form-control'>
            <div><input type="radio" value="No formal education" name="edu" checked={edu === 'No formal education' } onChange={(e) => setEdu(e.target.value)}/>{' '} No formal education</div>
            <div><input type="radio" value="Primary or less than 6years" name="edu" checked={edu === 'Primary or less than 6years'} onChange={(e) => setEdu(e.target.value)}/>{' '} Primary or less than 6years</div>
            <div><input type="radio" value="More than-6years" name="edu" checked={edu === 'More than-6years'} onChange={(e) => setEdu(e.target.value)}/>{' '} More than-6years</div>
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='marstat'>Are you currently married?</label><br/>
           <div className='form-control'>
            <div> <input type="radio" value="Now Single" name="marstat" checked={mar === 'Now Single' } onChange={(e) => setMar(e.target.value)}/>{' '} Now Single</div>
            <div><input type="radio" value="In current relationship" name="marstat" checked={mar === 'In current relationship' } onChange={(e) => setMar(e.target.value)}/>{' '} In current relationship</div>
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='fsize'>How many people are there in your household in total?</label><br/>
            <input type="number" name="fsize" className='form-control' value={npo} onChange={(e) => setNpo(e.target.value)}/> 
          </div>
          <div className='mb-3'>
            <label htmlFor='q100'>How is your overall general health?</label><br/>
            <div className='form-control'>
            <div><input type="radio" value="veryGood" name="q100" checked={hlt === "veryGood"} onChange={(e) => setHlt(e.target.value)}/>{' '} Very Good</div>
            <div><input type="radio" value="good" name="q100" checked={hlt === "good"} onChange={(e) => setHlt(e.target.value)}/>{' '} Good</div>
            <div><input type="radio" value="moderate" name="q100" checked={hlt === "moderate"} onChange={(e) => setHlt(e.target.value)}/>{' '} Moderate</div> 
            <div><input type="radio" value="bad" name="q100" checked={hlt === "bad"} onChange={(e) => setHlt(e.target.value)}/>{' '} Bad</div>
            <div><input type="radio" value="veryBad" name="q100" checked={hlt === "veryBad"} onChange={(e) => setHlt(e.target.value)}/>{' '} Very Bad</div>
            </div>                
          </div>
          <div className='mb-3'>
            <label htmlFor='q2009'>How is your overall quality of life?</label><br/>
            <div className='form-control'>
            <div><input type="radio" value="veryGood" name="q2009" checked={qual === "veryGood"} onChange={(e) => setQual(e.target.value)}/>{' '} Very Good</div>
            <div><input type="radio" value="good" name="q2009" checked={qual === "good"} onChange={(e) => setQual(e.target.value)}/>{' '} Good</div>
            <div><input type="radio" value="moderate" name="q2009" checked={qual === "moderate"} onChange={(e) => setQual(e.target.value)}/>{' '} Moderate</div>  
            <div><input type="radio" value="bad" name="q2009" checked={qual === "bad"} onChange={(e) => setQual(e.target.value)}/>{' '} Bad</div>
            <div><input type="radio" value="veryBad" name="q2009" checked={qual === "veryBad"} onChange={(e) => setQual(e.target.value)}/>{' '} Very Bad</div>
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='q2009'>How happy are you in life? </label><br/>
            <div className='form-control'>
            <div><input type="radio" value="veryHappy" name="q2010" checked={hap === "veryHappy"} onChange={(e) => setHap(e.target.value)}/>{' '} Very Happy</div>
            <div><input type="radio" value="happy" name="q2010" checked={hap === "happy"} onChange={(e) => setHap(e.target.value)}/>{' '} Happy</div>
            <div><input type="radio" value="neither" name="q2010" checked={hap === "neither"} onChange={(e) => setHap(e.target.value)}/>{' '} Neither</div>
            <div><input type="radio" value="unhappy" name="q2010" checked={hap === "unhappy"} onChange={(e) => setHap(e.target.value)}/>{' '} Unhappy</div>
            <div><input type="radio" value="veryUnhappy" name="q2010" ame="q2010" checked={hap === "veryUnhappy"} onChange={(e) => setHap(e.target.value)}/>{' '} Very Unhappy </div> 
            </div>                    
          </div>
          </form>
          <button className='btn btn-success' onClick={insert}>Submit</button>
        </div>
    </div>
  );
}

export default Survey;