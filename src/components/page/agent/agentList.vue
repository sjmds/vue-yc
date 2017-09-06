<template>
    <div class="content-con fl">
        <!-- 代理商管理 -->
        <div class="bg-white content-padding">
            <!-- 切换 -->
            <div class="sy-tab clearfix">
                <ul>
                    <li class="on"><a href="agent-management.html">代理商列表</a></li>
                    <li><a href="agent-management-add.html">新增</a></li>
                    <li><a href="agent-goods-management.html">代理商商品管理</a></li>
                </ul>
            </div>
            <!-- 切换 -->
            <div class="sline"></div>
            <!-- 查询 -->
            <div class="search-form clearfix">
                <form class="layui-form" action="">
                    <div class="layui-input-inline">
                        <label class="layui-input-inline">商户名称:</label>
                        <div class="layui-input-inline">
                            <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="输入商户名" class="layui-input">
                        </div>
                    </div>
                    <div class="layui-input-inline">
                        <label class="layui-input-inline">联系人:</label>
                        <div class="layui-input-inline">
                            <input type="text" name="name" lay-verify="name" autocomplete="off" placeholder="输入联系人" class="layui-input">
                        </div>
                    </div>
                    <div class="layui-input-inline">
                        <label class="layui-input-inline">地区:</label>
                        <div class="layui-input-inline">
                            <div class="layui-unselect layui-form-select carea-ctree">
                                <div class="layui-select-title">
                                    <input type="text" name="carea" lay-verify="carea" autocomplete="off" placeholder="地区" class="layui-input">
                                    <i class="layui-edge"></i>
                                </div>
                            </div>
                            <ul id="ctree" class="ctree" style="display:none;">
                            </ul>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-input-inline">状态:</label>
                        <div class="layui-input-inline">
                            <select name="adstate" lay-search="">
                                <option value="0">全部</option>
                                <option value="1">启用</option>
                                <option value="2">禁用</option>
                            </select>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-input-inline">添加时间:</label>
                        <div class="layui-input-inline">
                            <input class="layui-input" name="timestart" placeholder="-年-月-日" onclick="layui.laydate({elem: this})">
                        </div>
                        <label class="layui-input-inline">~</label>
                        <div class="layui-input-inline">
                            <input class="layui-input" name="timeend" placeholder="-年-月-日" onclick="layui.laydate({elem: this})">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <button class="layui-btn" lay-submit="" lay-filter="sersub">查询</button>
                    </div>
                </form>
            </div>
            <!-- 查询 -->
            <div class="sline"></div>
            <!-- 上下架 -->
            <div class="goodsAction clearfix">
                <ul>
                    <li>启用</li>
                    <li>禁用</li>
                    <li onclick="cancelGoods('all')">删除</li>
                </ul>
            </div>
            <!-- table -->
            <div class="content-table clearfix">
                <table class="layui-table">
                    <thead>
                        <tr>
                            <td>
                                <input type="checkbox" onclick="allChoose()">
                            </td>
                            <td>序号</td>
                            <td>商户名称</td>
                            <td>用户名</td>
                            <td>法人</td>
                            <td>注册时间</td>
                            <td>最近登录时间</td>
                            <td>状态</td>
                            <td>代理商品数量</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" onclick="checkmore();">
                            </td>
                            <td>1</td>
                            <td>四川北大荒米业有限公司</td>
                            <td>scbdh</td>
                            <td>何桂菊</td>
                            <td>2017-06-20</td>
                            <td>2017-06-20</td>
                            <td><i class="ico-using"></i>启用</td>
                            <td><span class="firebrick">1000</span></td>
                            <td><a class="edit-a" href="agent-management-edit.html">编辑</a>|<a class="edit-a edit-cancel" href="agent-management-details.html">详情</a></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" onclick="checkmore();">
                            </td>
                            <td>1</td>
                            <td>四川北大荒米业有限公司</td>
                            <td>scbdh</td>
                            <td>何桂菊</td>
                            <td>2017-06-20</td>
                            <td>2017-06-20</td>
                            <td><i class="ico-no-using"></i>禁用</td>
                            <td><span class="firebrick">1000</span></td>
                            <td><a class="edit-a" href="agent-management-edit.html">编辑</a>|<a class="edit-a edit-cancel" href="agent-management-details.html">详情</a></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" onclick="checkmore();">
                            </td>
                            <td>1</td>
                            <td>四川北大荒米业有限公司</td>
                            <td>scbdh</td>
                            <td>何桂菊</td>
                            <td>2017-06-20</td>
                            <td>2017-06-20</td>
                            <td><i class="ico-using"></i>启用</td>
                            <td><span class="firebrick">1000</span></td>
                            <td><a class="edit-a" href="agent-management-edit.html">编辑</a>|<a class="edit-a edit-cancel" href="agent-management-details.html">详情</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="data-page" id="data-page"></div>
        </div>
        <!-- 代理商管理 -->
    </div>
</template>
<script>
export default {

    data() {
        return {


        }
    }
}
</script>
