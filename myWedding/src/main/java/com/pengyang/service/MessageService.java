package com.pengyang.service;

import java.util.List;
import java.util.Map;

/**
 * Created by pengyang on 2018/9/6.
 */
public interface MessageService {

    public List<Map> getAllMessage();

    public void saveMessage(String name,String avatar,String content);
}
