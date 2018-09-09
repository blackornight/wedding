package com.pengyang.service.impl;

import com.pengyang.dao.MessageDao;
import com.pengyang.service.MessageService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by pengyang on 2018/9/6.
 */

@Service("messageService")
@Transactional
public class MessageServiceImpl implements MessageService{

    @Resource
    private MessageDao messageDao;

    @Override
    public List<Map> getAllMessage() {
        return messageDao.getAllMessage();
    }

    @Override
    public void saveMessage(String name, String avatar, String content) {
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("username", name);
        param.put("avator", avatar);
        param.put("content", content);
        messageDao.saveMessage(param);
    }
}
