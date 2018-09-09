package com.pengyang;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by pengyang on 2018/8/18.
 */
@SpringBootApplication
@MapperScan("com.pengyang.dao")
public class Application {

    public static void main(String[] args){
        SpringApplication.run(Application.class,args);
    }
}
