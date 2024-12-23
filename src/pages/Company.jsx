import { apiGetAllUser } from '@/services/userService';
import * as React from 'react';
import { useSelector } from 'react-redux';
export default function Company() {
  const [data, setData] = React.useState([]);
  const [form, setForm] = React.useState({ id: '', companyName: ''});
  const [isEdit, setIsEdit] = React.useState(false);
  const { currentData } = useSelector((state) => state.user);
  // Xử lý input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Thêm hoặc cập nhật dữ liệu
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      // Update dữ liệu
      const rawResponse = await fetch(`http://localhost:8080/api/updateCompany/ + ${form?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...form })
      });
      console.log(rawResponse)
      if(rawResponse?.ok) {
        fetchAllUsers()
        setIsEdit(false)
      }
    } else {
      // Thêm dữ liệu mới
      try {
        // const res = await fetch('http://localhost:8080/api/users');
        // console.log(res)
        const rawResponse = await fetch('http://localhost:8080/api/addNewCompany', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...form })
        });
        const content = await rawResponse.json();
        console.log(content)
        fetchAllUsers()
      } catch (error) {
        console.log(error)
      }
    }
    setForm({ id: '', companyName: '' });
  };
  // Xóa dữ liệu
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/deleteCompany/ + ${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
    fetchAllUsers()

    // console.log(rawResponse)
    // if(rawResponse?.ok) {
    // }
  };

  // Edit dữ liệu
  const handleEdit = (item) => {
    setForm(item);
    setIsEdit(true);
  };

  const fetchAllUsers = async() => {
    try {
      // const res = await apiGetAllUser()
      // console.log(res)
      await fetch('http://localhost:8080/api/company')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(err => console.error(err));
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    if(currentData) {
      fetchAllUsers()
    }
  }, [currentData])
  console.log(data)
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">CRUD Company Table</h1>

      
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            name="companyName"
            placeholder="Tên công ty"
            value={form.companyName}
            onChange={handleInputChange}
            className="p-2 border rounded w-80"
            required
          />
          
          
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isEdit ? 'Update' : 'Add'}
        </button>
      </form>

    
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Company Name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border p-2 text-center">{item?.id}</td>
                <td className="border p-2 text-center">{item?.companyName}</td>
              
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600 mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border p-2 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}