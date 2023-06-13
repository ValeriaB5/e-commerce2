import Layout from '../../Components/Layout'

function MyAccount() {
  return (
    <Layout>
      <section className='w-100'>
      <h2 className='font-medium text-xl p-8 text-center'>My Account</h2>
      <label className='text-base'>Name</label>
        <p className='text-sm text-gray-400 pb-6'>Camila Yokoo</p>
        <label className='text-base'>Email</label>
        <p className='text-sm text-gray-400 pb-6'>camilayokoo@email.com</p>
        <label className='text-base'>Password</label>
        <p className='text-sm text-gray-400 pb-6'>*********</p>
        <button type='button' class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-60'> Edit </button>
      </section>
    </Layout>
  )
}

export default MyAccount