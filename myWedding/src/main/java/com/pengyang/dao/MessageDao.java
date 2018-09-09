package com.pengyang.dao;

import java.util.List;
import java.util.Map;

/**
 * Created by pengyang on 2018/9/6.
 */
public interface MessageDao {

    /**
     * 获取所有消息 根据时间顺序排序
     * @return
     */
    public List<Map> getAllMessage();

    public int saveMessage(Map<String,Object> param);
}
