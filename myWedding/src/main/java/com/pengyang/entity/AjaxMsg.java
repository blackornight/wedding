package com.pengyang.entity;

/**
 * Created by pengyang on 2018/9/6.
 */
public class AjaxMsg {
    public static final String SUCCESS = "200";
    public static final String FAIL="500";

    private String message;
    private String code;
    private Object datas;

    public AjaxMsg(){
        this.code=AjaxMsg.SUCCESS;
        this.message = "成功";
        this.datas = null;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Object getDatas() {
        return datas;
    }

    public void setDatas(Object datas) {
        this.datas = datas;
    }
}
