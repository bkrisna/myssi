<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Projectvendors extends MY_Controller {

	function __construct() {
        parent::__construct();
        $this->load->model('Projectvendors_model','md');
	}
	
	/*public function index() {
		echo phpinfo();
	}*/

	/**
	*
	* CREATE an item
	*
	* @return json encoded array (boolean)
	*/

	public function create() {
	    $items = json_decode($this->input->post('items'));
        $item_data = array(
            'vendor_name' => $items->vendor_name,
        	'vendor_url' => $items->vendor_url,
			'vendor_pic_name' => $items->vendor_pic_name,
			'vendor_pic_tel' => $items->vendor_pic_tel,
            'vendor_pic_email' => $items->vendor_pic_email,
			'vendor_addr' => $items->vendor_addr,
			'vendor_alias' => $items->vendor_alias
        );

	    $insert = $this->md->insert_entry($item_data);
	    if (intval($insert)) {
	        $item_data['id'] = $insert;
	        $data['success'] = true;
	        $data['total'] = 1;
	        $data['items'] = $item_data;
	    } else {
	        $data['success'] = false;
	        $data['title'] = 'Error';
	        $data['message'] = 'There is a problem with the database.';
	    }

		echo json_encode($data);
	}

	/**
	*
	* READ/RETRIEVE items
	*
	* @return json encoded array (items)
	*/

	public function read() {
	    $limit = $this->input->get('limit', TRUE) > '' ? $this->input->get('limit', TRUE) : 45;
		$offset = $this->input->get('start', TRUE);
		$filter = array();

		if ($this->input->get('id', TRUE) > '') {
			$where['field'] = 'id';
			$where['value'] = $this->input->get('id', TRUE);
			$where['operator'] = "=";
			array_push($filter, $where);
		}

	    $sorts = json_decode($this->input->get('sort', TRUE));
	    if ($sorts) {
		    foreach ($sorts as $sort) {
		        $orders[] = $sort->property.' '.$sort->direction;
		    }
		    $order_by = implode(', ', $orders);
	    } else {
	    	$order_by = 'id asc';
		}
		
	    $total_entries = $this->md->count_all_entries($filter);
	    $entries = $this->md->get_all_entries($filter, $limit, $offset, $order_by);

	    $data['success'] = true;
	    $data['total'] = $total_entries;
	    $data['items'] = $entries;

	    extjs_output($data);
	}

	/**
	*
	* UPDATE an item
	*
	* @return json encoded array (boolean)
	*/

	public function update() {
		$items = json_decode($this->input->post('items'));

		$filter = array(
            array(
                'field' => 'id',
                'operator' => '=',
                'value' => $items->id ? $items->id : ''
            )
        );

	    $insert = $this->md->update_entry($filter, $items);
	    if (intval($insert)) {
	        $data['success'] = true;
	        $data['total'] = 1;
	        $data['items'] = $item_data;
	    } else {
	        $data['success'] = false;
	        $data['title'] = 'Error';
	        $data['message'] = 'There is a problem with the database.';
	    }

		echo json_encode($insert);
	}

	/**
	*
	* DESTROY/DELETE an item
	*
	* @return json encoded array (boolean)
	*/

	public function destroy() {
	    $items = json_decode($this->input->post('items'));

        $filter = array(
            array(
                'field' => 'id',
                'operator' => '=',
                'value' => $items->id ? $items->id : ''
            )
        );

	    if ($this->md->delete_enry($filter)) {
	        $data['success'] = true;
	    } else {
	        $data['success'] = false;
	        $data['title'] = 'Error';
	        $data['message'] = 'There is a problem with the database.';
	    }

	    extjs_output($data, 'html');
	}

}