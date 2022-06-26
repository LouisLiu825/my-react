import { Link } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select } from 'antd'
import { useState, useEffect } from 'react'
import { http } from '@/utils'
import locale from 'antd/es/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'
import './index.scss'
import ElTable from './table'
import { useStore } from '@/store'

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
  const { channelStore } = useStore()
  const [article, setArticle] = useState({
    list: [],
    count: 0,
  })
  const [params, setParams] = useState({
    page: 1,
    per_page: 10,
  })
  const getArticles = async () => {
    const res = await http.get('/mp/articles', { params })
    const { results, total_count } = res.data
    setArticle({
      list: results,
      count: total_count,
    })
  }
  useEffect(() => {
    getArticles()
  }, [params])

  const onSearch = (values) => {
    const { status, channel_id, date } = values
    const _params = {}
    _params.status = status
    if (channel_id) {
      _params.channel_id = channel_id
    }
    if (date) {
      _params.begin_pudate = date[0].format('YYYY-MM-DD')
      _params.end_pubdate = date[1].format('YYYY-MM-DD')
    }
    setParams({
      ...params,
      ..._params,
    })
    // console.log(11, params, _params)
  }
  return (
    <div>
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: -1 }} onFinish={onSearch}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="频道" name="channel_id">
            <Select placeholder="请选择文章频道" style={{ width: 200 }}>
              {channelStore.channels.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title={`根据筛选条件共查询到${article.count}条结果`}>
        <ElTable
          channels={article.list}
          total={article.count}
          params={params}
          setParams={setParams}
        ></ElTable>
      </Card>
    </div>
  )
}

export default Article
