import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const LeftNav = () => {
	
	return (
		<Menu
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			mode="inline"
		>	 
			<SubMenu key="sub1" icon={<MailOutlined />} title="Tồn kho">
				<SubMenu key="sub4" title="Sản phẩm">
					<Menu.Item key="1">Tạo sản phẩm</Menu.Item>
					<Menu.Item key="2">Danh sách</Menu.Item>
				</SubMenu>
			</SubMenu>
			
			<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Sản xuất">
				{/* <Menu.Item key="5">Lệnh sản xuất</Menu.Item>
				<Menu.Item key="6">Option 6</Menu.Item> */}
				<SubMenu key="sub3" title="Lệnh sản xuất">
					<Menu.Item key="3">Tạo lệnh sản xuất</Menu.Item>
					<Menu.Item key="4">Danh sách</Menu.Item>
				</SubMenu>
			</SubMenu>
		</Menu>
	);
}

export default LeftNav;