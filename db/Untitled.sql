SELECT * FROM myssi.menu;

SELECT menu.*, menu_module.module_name, menu_access.access_name, child_tbl.child_count
FROM menu
LEFT JOIN menu_module ON menu_module.id = menu.module_id 
LEFT JOIN menu_access on menu_access.id = menu.access_type 
LEFT JOIN (SELECT menu.parent_id as child_parent, COUNT(menu.id) as child_count FROM menu GROUP BY menu.parent_id) AS  child_tbl on child_tbl.child_parent = menu.id
WHERE
	menu.parent_id = 0
ORDER BY menu.parent_id,menu.sort ASC;


SELECT menu.parent_id, COUNT(menu.id) as child_count FROM menu GROUP BY menu.parent_id;
