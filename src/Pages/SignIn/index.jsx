import Layout from '../../Components/Layout'

function SignIn() {
    return (
    <Layout>
      <section className='w-100'>
      <h2 className='font-medium text-xl p-8 text-center'>Sign In</h2>
      <div class='mb-6'>
      <label for='email' class='block mb-2 text-base text-black'>Your email</label>
      <input type='email' id='email' class='bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='name@flowbite.com' required></input>
      </div>
      <div class='mb-6'>
      <label for='password' class='block mb-2 text-base text-black'>Your password</label>
      <input type='password' id='password' class='bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='*********' required></input>
      </div>
      <div class='flex items-start mb-6'>
      <div class='flex items-center h-5'>
        <input id='remember' type='checkbox' value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
      </div>
      <label for='remember' class='ml-2 text-base text-gray-400'>Remember me</label>
      </div>
      <button type='submit' class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-60'>Submit</button>
      </section>
    </Layout>
    )
  }
  
  export default SignIn