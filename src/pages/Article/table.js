import { Table, Tag, Space, Button, Popconfirm, message } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import { http } from '@/utils'
import { history } from '@/utils'

function ElTable({ channels, params, total, setParams }) {
  const pageChange = (page, pageSize) => {
    setParams({
      ...params,
      page,
      per_page: pageSize,
    })
  }
  const delArticle = async (data) => {
    await http.delete(`/mp/articles/${data.id}`)
    message.success('删除成功')
    setParams({
      page: 1,
      per_page: 10,
    })
  }
  const colnums = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: (cover) => {
        return (
          <img src={cover.images[0] || img404} width={80} height={60} alt="" />
        )
      },
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220,
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (data) => <Tag color="green">审核通过</Tag>,
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate',
    },
    {
      title: '阅读数',
      dataIndex: 'read_count',
    },
    {
      title: '评论数',
      dataIndex: 'comment_count',
    },
    {
      title: '点赞数',
      dataIndex: 'like_count',
    },
    {
      title: '操作',
      render: (data) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              shape="circle"
              onClick={() => history.push(`/publish?id=${data.id}`)}
              icon={<EditOutlined />}
            />
            <Popconfirm
              title="确认删除该条文章吗?"
              onConfirm={() => delArticle(data)}
              okText="确认"
              cancelText="取消"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        )
      },
    },
  ]

  return (
    <Table
      rowKey="id"
      columns={colnums}
      dataSource={channels}
      pagination={{
        position: ['bottomRight'],
        current: params.page,
        pageSize: params.per_page,
        total: total,
        onChange: pageChange,
      }}
    ></Table>
  )
}

export default ElTable
