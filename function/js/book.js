/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = '老黄'

function getBooksList() {
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        params: {
            creator
        }
    }).then(result => {
        // console.log(result)
        const bookList = result.data.data
        // console.log(bookList)
        //渲染数据
        const htmlStr = bookList.map((item, index) => {
            return `<tr>
          <td>${index + 1}</td>
          <td>${item.bookname}</td>
          <td>${item.author}</td>
          <td>${item.publisher}</td>
          <td data-id=${item.id}>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>`
        }).join('')
        // console.log(htmlStr)
        document.querySelector('.list').innerHTML = htmlStr
    })
}

getBooksList()


const addModelDom = document.querySelector('.add-modal')
const addModel = new bootstrap.Modal(addModelDom)

document.querySelector('.add-btn').addEventListener('click', () => {
    const addForm = document.querySelector('.add-form')
    const bookObj = serialize(addForm, { hash: true, empty: true })
    console.log(bookObj);

    //提交到服务器
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        method: 'POST',
        data: {
            ...bookObj,
            creator
        }
    }).then(result => {
        // console.log(result);
        //添加成功，再次渲染
        getBooksList()
        //重置表单
        addForm.reset()
        //隐藏弹框
        addModel.hide()
    })

})



//删除
document.querySelector('.list').addEventListener('click', e => {
    // console.log(e.target);
    if (e.target.classList.contains('del')) {
        const theId = e.target.parentNode.dataset.id
        // console.log(theId);
        axios({
            url: `http://hmajax.itheima.net/api/books/${theId}`,
            method: 'DELETE'
        }).then(() => { getBooksList() })
    }
})



//编辑 -------------------  三个逻辑
const editDom = document.querySelector('.edit-modal')
const editMadel = new bootstrap.Modal(editDom)
document.querySelector('.list').addEventListener('click', e => {
    if (e.target.classList.contains('edit')) {
        const theId = e.target.parentNode.dataset.id
        axios({
            url: `http://hmajax.itheima.net/api/books/${theId}`
        }).then(result => {
            //  console.log(result) 
            // const { author, bookname, publisher } = result.data.data
            // document.querySelector('.edit-form .bookname').value = bookname
            // document.querySelector('.edit-form .author').value = author
            // document.querySelector('.edit-form .publisher').value = publisher  //简写如下

            const bookObj = result.data.data
            const keys = Object.keys(bookObj)
            // console.log(keys);
            keys.forEach(key => {
                document.querySelector(`.edit-form .${key}`).value = bookObj[key]
            })
        })
        editMadel.show()
    }
})

document.querySelector('.edit-btn').addEventListener('click', () => {
    const editForm = document.querySelector('.edit-form')
    const { id, author, bookname, publisher } = serialize(editForm, { hash: true, empty: true })
    axios({
        url: `http://hmajax.itheima.net/api/books/${id}`,
        method: 'PUT',
        data: {
            bookname,
            author,
            publisher,
            creator
        }
    }).then(() => {
        getBooksList()
    })
    editMadel.hide()
})