package com.pengyang.weixin;

import com.pengyang.entity.AjaxMsg;
import com.pengyang.service.MessageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * Created by pengyang on 2018/8/19.
 */
@RestController
public class TestController {

    @Resource(name = "messageService")
    private MessageService messageService;

    @GetMapping("/hello")
    public String sayHi() {
        return "hello";
    }

    @GetMapping("/saveMessage")
    public AjaxMsg saveMessage(String name, String avatar, String content){
        AjaxMsg ajaxMsg = new AjaxMsg();
        try {
            messageService.saveMessage(name,avatar,content);
        } catch (Exception e) {
            e.printStackTrace();
            ajaxMsg.setMessage(e.getMessage());
            ajaxMsg.setCode(AjaxMsg.FAIL);
        }
        return ajaxMsg;
    }

    @GetMapping("/getAllMessage")
    public AjaxMsg getAllMessage(){
        AjaxMsg ajaxMsg = new AjaxMsg();
        ajaxMsg.setDatas(messageService.getAllMessage());
        return ajaxMsg;
    }
}
