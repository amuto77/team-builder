import React from 'react'

export default function MemberForm (props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        console.log(name, value);
        update(name, value);
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div>
                <h2>
                Add A Team Member!
                </h2>
            </div>
            <div className ='form-grou p inputs'>
                <label htmlFor='userNameInput'>Name:&nbsp;
                    <input
                        id = 'nameInput'
                        name = 'name'
                        type = 'text'
                        placeholder = 'Enter Name'
                        maxlength='20'
                        value={values.name}
                        onChange={onChange} />

                </label>
                <label htmlFor='emailInput'>Email:&nbsp;
                    <input
                        id='emailInput'
                        name='email'
                        type='email'
                        placeholder='Enter Email'
                        maxLength='20'
                        value={values.email}
                        onChange={onChange} />
                </label>
                <label>Role:&nbsp;
                    <select name='role' onChange={onChange}>
                        <option value=''>Select A Role</option>
                        <option value='Student'>Backend</option>
                        <option value='FrontEnd'>Front End</option>
                        <option value='tl'>Full Stack Web</option>
                        <option value='tl'>Developer</option>
                    </select>    
                </label>
                <button enabled={!values.username || !values.email || !values.role}>Submit</button>
            </div>
        </form>
    )

}