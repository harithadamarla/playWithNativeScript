package com.tns.gen.android.widget;

public class ExpandableListView_OnGroupCollapseListener implements android.widget.ExpandableListView.OnGroupCollapseListener {
	public ExpandableListView_OnGroupCollapseListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onGroupCollapse(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onGroupCollapse", void.class, args);
	}

}
