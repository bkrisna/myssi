<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class AssetLists_model extends CI_Model {

    private $table;
    private $table_join;
	private $table_fields;
	private $table_fields_join;

    function __construct() {
        parent::__construct();

        $this->table = 'myssi_assets';
        $this->table_join = array( 
            array(
                'table_name' => 'myssi_asset_type',
                'key_field' => 'id',
                'foreign_field' => $this->table.'asset_type',
                'join_type' => 'left'     
            )
        );

		$this->table_fields = array(
			$this->table.'.id',
            $this->table.'.assetname',
            $this->table.'.serialnumber',
            $this->table.'.asset_type',
            $this->table.'.is_engineered',
            $this->table.'.is_virtualhost',
            $this->table.'.asset_function',
            $this->table.'.asset_model_id',
            $this->table.'.asset_cpu_core',
            $this->table.'.asset_memory'
		);

		$this->table_fields_join = array(
            $this->table_join[0]['table_name'].'type_name'
        );
    }

    function get_all_entries($filter = array(), $limit = '45', $offset = '0', $order = '') {
		$this->db->select(implode(', ', array_merge($this->table_fields, $this->table_fields_join)));
		$this->db->from($this->table);

        if (is_array($this->table_join) && count($this->table_join) > 0) {
            foreach($join as $joins) {
                $this->db->join($join['table_name'], $join['table_name'].'.'.$join['key_field'].' = '.$join['foreign_field'], $join['join_type']);
            }
        }

		if (is_array($filter) && count($filter) > 0) generate_filter($filter);

		if ($order > '') {
		    $this->db->order_by($order);
		}

		$this->db->limit($limit, $offset);

		$news_db_query = $this->db->get();

		if ($news_db_query->num_rows > 0) {
		    return $news_db_query->result();
		} else {
		    return false;
		}
    }

	function count_all_entries($filter = array()) {
        $this->db->from($this->table);

		if (is_array($filter) && count($filter) > 0) generate_filter($filter);

        return $this->db->count_all_results();
    }

    function insert_entry($data) {
        $this->db->insert($this->table, $data);

        if($this->db->affected_rows() == 1) {
            return $this->db->insert_id();
        } else {
            return false;
        }
    }

    function update_entry($filter = array(), $data) {
        if (is_array($filter) && count($filter) > 0) generate_filter($filter);

        $this->db->update($this->table, $data);

        if($this->db->affected_rows() == 1) {
            return true;
        } else {
            return false;
        }
    }

    function delete_enry($filter = array()) {
        if (is_array($filter) && count($filter) > 0) generate_filter($filter);

        $this->db->delete($this->table);

        if($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

}